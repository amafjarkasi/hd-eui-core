import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';

const meta: Meta<typeof Form> = {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <Form
      className="w-80"
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
      validationSchema={{
        email: { required: true, pattern: /\S+@\S+\.\S+/, message: 'Invalid email address' },
        password: { required: true, message: 'Password is required' }
      }}
    >
      <Input name="email" label="Email Address" placeholder="admin@enterprise.com" />
      <Input name="password" label="Password" type="password" placeholder="••••••••" />
      <div className="pt-2">
        <Button type="submit" fullWidth>Sign In</Button>
      </div>
    </Form>
  ),
};

export const Complex: Story = {
  render: () => (
    <Form
      className="w-96"
      onSubmit={(data) => console.log('Form Submitted:', data)}
    >
      <div className="grid grid-cols-2 gap-2">
        <Input name="firstName" label="First Name" />
        <Input name="lastName" label="Last Name" />
      </div>
      <Input name="company" label="Organization" />
      <Input name="role" label="Job Title" />
      <div className="py-1">
        <Checkbox name="terms" label="I agree to the enterprise service level agreement" />
      </div>
      <div className="flex justify-end gap-1 mt-2">
        <Button variant="secondary" size="sm">Cancel</Button>
        <Button type="submit" size="sm">Save Changes</Button>
      </div>
    </Form>
  ),
};
