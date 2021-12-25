# Angular Architecture

The architecture of Angular are building by these block. There are :
- Modules: a building block that's contain routes, components, services and more.
- Components: contains a template, data and logic, forming part of a DOM tree.
- Directives: attach behaviour, extend, or transform a particular element and its children.
- Services: data layer, logic that is not component related, such as API requests.
- Routing: renders a component based on the URL state, drives navigation.

# Install Angular CLI

`npm install -g @angular/cli`

# Basic workflow

- `ng help`: show ng cli usages
- `ng generate --help`: show ng cli usages
- `ng new my-first-project`: generates new ng project
- `cd my-first-project`: access project directory
- `ng serve`: serve ng project

# Template fundamental
`Interpolation`: allows angular bind angular component properties to angular template (inside element's content).
example:
- ` title = "Chamrong"` in component.
- `{{ title }}`: in template <br>

`Property binding`: allows angular bind angular component properties to angular template (inside element's attribute).
example:
- `link: string = 'https://chamrong.com/` in component
- `<element [src]= 'link'></element>` in template

`Event binding`: allows angular bind angular template $event to angular component property.
example:
- `<input (click)= 'handleClick($event)'>`: in template
- `handleClick($event: any) { console.log($event.target.value) }`: in component