import React, { FormEvent, ReactNode } from "react";
import clsx from "clsx";

export const useForm = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a Form component");
  }
  return context;
};

export interface FormField {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  pattern?: string;
  message?: string;
}

export interface FormProps {
  onSubmit?: (data: Record<string, string>) => void;
  children?: ReactNode;
  className?: string;
  validationSchema?: Record<
    string,
    { required?: boolean; pattern?: RegExp; message?: string }
  >;
}

export interface FormContextType {
  register: (field: FormField) => void;
  unregister: (field: FormField) => void;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

export const FormContext = React.createContext<FormContextType | undefined>(
  undefined,
);

export const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  className,
  validationSchema,
}) => {
  const [fields, setFields] = React.useState<Record<string, FormField>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  const register = React.useCallback((field: FormField) => {
    setFields((prev) => ({ ...prev, [field.name]: field }));
  }, []);

  const unregister = React.useCallback((field: FormField) => {
    setFields((prev) => {
      const newFields = { ...prev };
      delete newFields[field.name];
      return newFields;
    });
  }, []);

  const validateField = React.useCallback(
    (field: FormField) => {
      const rules = validationSchema?.[field.name];
      if (!rules) return "";

      if (rules.required && (!field.value || field.value.trim() === "")) {
        return rules.message || `${field.name} is required`;
      }

      if (rules.pattern && field.value && !rules.pattern.test(field.value)) {
        return rules.message || `${field.name} is invalid`;
      }

      return "";
    },
    [validationSchema],
  );

  const validateAll = React.useCallback(() => {
    const newErrors: Record<string, string> = {};
    Object.values(fields).forEach((field) => {
      const error = validateField(field);
      if (error) {
        newErrors[field.name] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [fields, validateField]);

  const handleSubmit = React.useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (validateAll()) {
        const data: Record<string, string> = {};
        Object.values(fields).forEach((field) => {
          if (field.value !== undefined) {
            data[field.name] = field.value;
          }
        });
        onSubmit?.(data);
      }
    },
    [validateAll, onSubmit, fields],
  );

  const contextValue = React.useMemo(
    () => ({
      register,
      unregister,
      errors,
      touched,
    }),
    [register, unregister, errors, touched],
  );

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} className={clsx("space-y-1", className)}>
        {children}
        {Object.keys(errors).length > 0 && (
          <div className="mt-2 p-1 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <ul className="text-[8px] text-red-600 dark:text-red-400 list-disc pl-4">
              {Object.entries(errors).map(([field, message]) => (
                <li key={field}>{message}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </FormContext.Provider>
  );
};
