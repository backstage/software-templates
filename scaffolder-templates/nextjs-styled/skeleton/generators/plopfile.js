module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator('Component', {
    description: 'Create a component with same name folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'confirm',
        name: 'createTests',
        message: 'Would you like to create a tests?',
      },
    ],

    actions: (data) => {
      const actions = []

      actions.push({
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/component/index.ts.hbs',
        skipIfExist: true,
      })

      actions.push({
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component/Component.tsx.hbs',
        skipIfExist: true,
      })

      actions.push({
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/component/Component.styles.ts.hbs',
        skipIfExist: true,
      })

      if (data.createTests) {
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.tests.tsx',
          templateFile: 'templates/component/Component.tests.tsx.hbs',
          skipIfExist: true,
        })
      }

      return actions
    },
  })

  plop.setGenerator('Page', {
    description: 'Create a page with default layout',
    prompts: [
      {
        type: 'confirm',
        name: 'createFolder',
        message: 'Would you like to create a new folder?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your page url?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'How should the title be displayed?',
      },
    ],

    actions: (data) => {
      var actions = []

      if (data.createFolder) {
        actions.push({
          type: 'add',
          path: '../src/pages/{{dashCase name}}/index.tsx',
          templateFile: 'templates/page/Page.tsx.hbs',
          skipIfExist: true,
        })
      } else {
        actions.push({
          type: 'add',
          path: '../src/pages/{{dashCase name}}.tsx',
          templateFile: 'templates/page/Page.tsx.hbs',
          skipIfExist: true,
        })
      }

      return actions
    },
  })
}
