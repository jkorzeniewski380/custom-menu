# Custom navigation menu

Custom navigation menu created with React.js using Font-awesome

- Hamburger menu on mobile
- Left-side menu on desktop using font-awesome icons

## Instalation

Use npm to install the package

```bash

npm i custom-menu

```

You need to use Font awesome for the package to work

## Usage

Component expects 2 props:

- router [boolean]: true if you're using React Router, false otherwise
- dirs [array]: Array of directories expected in JavaScript Object form with name:value pairs:
  a) dir: String with a path to the directory, ex. '/home';
  b) name: String with a name of directory, ex. 'Home';
  c) icon: List of font-awesome icon classess needed to display icon in string form, ex. 'fas fa-home';

```javascript
function App() {
  const dirs = [
    {
      dir: '/home',
      name: 'Home',
      icon: 'fas fa-home',
    },
    {
      dir: '/settings',
      name: 'Settings',
      icon: 'fas fa-cog',
    },
  ];

  return (
    <div id="app">
      <Navi router={true} dirs={dirs} />
    </div>
  );
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
