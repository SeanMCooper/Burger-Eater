# Burger EATER

This app uses mysql, handlebars and node to create a burger eating app.

# How to
Add burgers at the bottom of the screen then submite them, they will be updated to the database then available to eat.

# Whats happening
Behind the scenes when hosted locally, our node app connects to a MYSQL database where the burgers can have a value of devoured or not. Once they are eaten the DB is updated to reflect which list they should belong to. The page refreshes after any button press and the html is updated with handlebars to update the view for our user, loading available burgers on the left column and un-avaiable on the right side.

The functionality is the same when deployed to heroku, but the database is connected through jawDB instead of a local instance.
