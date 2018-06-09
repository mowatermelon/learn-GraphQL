# learn-GraphQL

Graphql Query hello world demo

Clone and run for a quick way to see GraphQL in action.

# To Use

To clone and run this repository you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```sh
# you need to install the packages first
npm install

# Clone this repository
git clone -b express https://github.com/mowatermelon/learn-GraphQL.git express

# Go into the repository
cd express

# Run the demo automatically open the browser at localhost:4000/graphql
npm start

# or you want to start another port as a service
# the default third parameter is the port value
npm start 4041

```

> demo effect in web

You will look at a page, mainly in two parts, the left is the prompt panel, the right is the results panel

> Shortcuts in the left panel

```text
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that starts
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#
#       Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
#
```

# Query Effect

![Query Effect](https://user-images.githubusercontent.com/18508817/41192417-d5fb5dbe-6c2f-11e8-90e4-ebcbbb6e6c04.png)

# Query History Effect

![Query History Effect](https://user-images.githubusercontent.com/18508817/41192539-e28bcac6-6c31-11e8-808b-0b6666ec16ca.png)
