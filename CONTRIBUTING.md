# Contributing to HD-EUI Core

Thank you for considering contributing to HD-EUI Core! We welcome contributions from the community to improve this hyper-dense enterprise UI library. By participating, you help make it better for everyone.

## Code of Conduct

Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to understand the standards we expect from contributors.

## How to Contribute

### Reporting Bugs

1. Check if the issue already exists in [GitHub Issues](https://github.com/amafjarkasi/hd-eui-core/issues).
2. If not, open a new issue using the bug report template.
3. Provide a clear title, description, steps to reproduce, expected behavior, actual behavior, and screenshots if applicable.
4. Include your environment (OS, browser, React version, etc.).

### Suggesting Features

1. Search existing issues to see if it's already requested.
2. Open a new issue with the feature request template.
3. Describe the feature, why it's needed, and any proposed implementation details.

### Setting Up the Project

1. Fork the repository on GitHub.
2. Clone your fork: `git clone https://github.com/<your-username>/hd-eui-core.git`
3. Navigate to the project: `cd hd-eui-core`
4. Install dependencies: `npm install`
5. Run Storybook for development: `npm run storybook`
6. Build the library: `npm run build`
7. Run tests: `npm test`
8. Lint code: `npm run lint`

### Submitting Pull Requests

1. Create a branch for your changes: `git checkout -b feature/my-feature` or `git checkout -b fix/my-fix`.
2. Make your changes, following the code style (use ESLint).
3. Add or update tests if applicable.
4. Commit with a clear message: `git commit -m "Add feature: description"`
5. Push to your fork: `git push origin feature/my-feature`
6. Open a PR against the `main` branch of the original repo.
7. Use the PR template, describing changes, related issues, and testing done.

### Code Style

- Use TypeScript for all components.
- Follow ESLint rules (run `npm run lint`).
- Use Tailwind CSS classes consistently with HD-EUI tokens.
- Ensure components are accessible (ARIA attributes, keyboard nav).
- Add Storybook stories for new components/variants.

### Testing

- Write unit tests with Jest for new features/bug fixes.
- Ensure 100% coverage for critical paths.
- Test in multiple browsers (Chrome, Firefox, Edge).

### Documentation

- Update README.md for new features.
- Add/update Storybook stories.
- Document props and usage in component files.

We review PRs promptly. Thanks for contributing to HD-EUI Core! 🚀

For questions, open an issue or contact the maintainers.