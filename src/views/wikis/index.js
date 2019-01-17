<!DOCTYPE html>
<html>
  <head>
  <% include ../static/partials/head.ejs %>
  </head>
  <body>
      <% include ../static/partials/navbar.ejs %>

      <main class="container">
      <% include ../static/partials/messages.ejs %>

      <h1>Wikis</h1>

      <a href="/wikis/new" class="btn btn-success">New Wiki</a>

      <ul class="list-group">
        <% wikis.forEach((wiki) => { %>
          <li class="list-group-item">
            <a href="/wikis/<%= wiki.id %>"> <%= wiki.title %> </a>
          </li>
        <% }) %>
      </ul>

      </main>

      <% include ../static/partials/baseScripts.ejs %>
    </body>
</html>
