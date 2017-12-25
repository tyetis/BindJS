# BindJS
Javascript Template Engine

<br />
<br />

Example

```html
<script id="template" type="text/template">
    <% a = 1; %>
    <% if(a == 1) { %>
      <b>Hello World!</b>
    <% } %>

    <ul>
    <% data.people.forEach(function(x) { %>
      <li><%= x %></li>
    <% }); %>
    </ul>
</script>
```
```javascript
people = ['geddy', 'neil', 'alex'];
var rendered = Render($("#template").html(), { people: people });
```
