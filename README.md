# CreateYourCV
Create a perfect CV website in just a few steps.

You can style your CV by changing two files: data.json and data.css.
* The data.json file contains your information and consists of the following 6 components: about_me, timeline, projects, skills, languages, contact_me. You can include the components you want, it is not necessary to include all of them. The about_me component has 2 subcomponents, the header and the details. You can't skip any of them, if you want. 
Last but not least, some data has the following structure: {"0":{}, "1":{}}. The numbers define the order the data of this structure will be shown.
* The data.css file contains the colors that your CV will have. All you have to do is to change the parameters with the colors you want. Also, if you want to include the header subcomponent you have to set the name of the image there and put the image under the src/images/ directory.


You can follow the given example and add your own data. 😊


### Step 1:
Clone the repository and open ./cv folder.
All you have to do is to update the files/directories with files start from "data". More specifically, "data.css" and "data.json".
"data.css" file contains color parameters and the main image of your CV.
"data.json" file contains all the text infomation that your CV will contain. 
Moreover, all the necessary photo should be placed in ./cv/images folder.

### Step 2: 
Let's start with "data.json". 
The available tags you will see are the following: components, about me, timeline, projects, skills, languages and contact me.

- "components": a list with the components that your CV will have. The available values that the list should contains are: "about me", "timeline", "skills", "languages", "projects", "contact me anonymously" and "contact me". The order you place the tags is the same order that the components will appear.
- "about_me": constists of two subcomponents, "heading" and "details". 

### Step 2: 
Choose 3 colors and update the src/App.css file.
### Step 3:
Put your images in the src/images directory
### Step 4
Update the data.json file
