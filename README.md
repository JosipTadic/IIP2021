# D-Wiz - app for making your own charts!

Live versions:

[Link 1](https://iip2021.vercel.app/)

[Link 2](https://iip2021.netlify.app/)

## Key features

- Generating and customising charts
- Downloading charts
- Upload .csv to data
- Blog with news/posts

## Charts

Charts can be made with 1-3 values (number of data values are unlimited, they are called "rows" in application). Charts with 1 value have: Line, Bar, Area, Scatter charts, while Charts with 2-3 values also have Composed(Combo) Charts. Each chart has its own customising parameters depending on Chart Type, for example there is no Line Type or Dash parameter for Bar Chart. Parameters for customising are: Colors, Dashes, Types, Widths, Opacities, Legends(Names).

## Charts - How to


On the top right corner of the screen, you can choose to work with One, Two or Three values (you can go to other anytime).

![Values](https://user-images.githubusercontent.com/33669118/121954939-a3492880-cd5f-11eb-8b3a-dc734b4997ce.png)

After choosing number of values, choose the type of chart you wish to work with (you can change it on the go).

![ChartCard](https://user-images.githubusercontent.com/33669118/121954944-a3e1bf00-cd5f-11eb-9fed-619ccc773da1.png)

### Add new row(add new data value)

To add a new value to the chart use button "Add new row". After adding the row, you can modify values in the table, and watch it change the Chart! You can also use decimal, or negative values. You can hover directly on the Chart for more info of single value.

### Delete

To delete a value you can press on the small icon for deleting on the row you wish to delete. Or you can delete whole table with "Delete table" button, just be careful as your work will be deleted.

### Download

To download a Chart, after you made it as you wish, simply press the "Download chart" button.

### Customise

Below the chart on the right part of the screen, there are options for customising the Chart you are creating.

![UI](https://user-images.githubusercontent.com/33669118/121954947-a512ec00-cd5f-11eb-9ad6-913aa4541787.png)

### Upload from .csv file

To upload the .csv file simply drag and drop the file to the bottom on the screen, where it states "Drop your csv here!", your csv must contain headers 'a', 'b', 'c', 'labelName'. You have the example on this repo "Book1.csv" so you can try it out.

![csv](https://user-images.githubusercontent.com/33669118/121954949-a512ec00-cd5f-11eb-8e31-17daac8ec749.png)

## Blog

Blog is a part of the platform which is used to interact with users, however you must be registered/logged on to create new posts (charts can be made without registering). On the Blog anyone can make posts, the topic of the Blog is Data Visualization, or tutorials from authors on how to create something.

![blog](https://user-images.githubusercontent.com/33669118/121954934-a17f6500-cd5f-11eb-9d77-61486ac4aeb4.png)

## Blog - How to

To visit the blog section head to the starting page and go to the bottom of the site, click "Read more" button. What you are seeing are posts ("All posts") made by others, you can see Header of the post, as well as the Author and date of publishment. On hover you can see more info.

![Blogs](https://user-images.githubusercontent.com/33669118/121954936-a2b09200-cd5f-11eb-9ef9-f3343cb2baa2.png)

### Register

To register go to "Sign up" link, and complete the form for registration.

### Log in

After you registered you are automatically logged in, but next time you can go to "Login" and simply log on to your account. If you wish to Log out simply press "Log out" link.

![Logged user](https://user-images.githubusercontent.com/33669118/121954955-a6441900-cd5f-11eb-80e9-e25b2e896b4f.PNG)

### Create new post

To create a post go to "Create new post", and fill out the form; Title, Description, Text, and Photo. Press button "Create" and your post is published!

![CreateNew](https://user-images.githubusercontent.com/33669118/121954958-a6dcaf80-cd5f-11eb-8e49-f21284c1b8fb.PNG)

### Documentation(on Croatian) - Repo - Dokumentacija IIP2021

## Technologies and libraries used

`HTML` `CSS` `JavaScript` `React.js` `Recharts` `Firebase` `Bootstrap`

## Video
Explanation on how to use website can be checked on video:
Dropbox link - https://www.dropbox.com/s/sl0x9x2agcp0x8t/final.mp4?dl=0 
Youtube link - https://www.youtube.com/watch?v=x5s_e1qwlEw
## Authors

[Marija Kantolić](https://github.com/mkantolic)
- Design, Blog

[Josip Tadić](https://github.com/JosipTadic)
- Charts
