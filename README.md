# CreateYourCV
Create a perfect CV website in just a few steps.

You can style your CV by changing two files: data.json and data.css.
* The data.json file contains the information and consists of the following 6 components: about_me, timeline,  skills, languages, projects, contact_me_1, contact_me_2. You can include the components you want, it is not necessary to include all of them. The order you put them is the order they will be shown. Some data has the following structure: {"0":{}, "1":{}}. The numbers define the order the data of this structure will be shown. 
* The data.css file contains the colors that your CV will have. All you have to do is to change the parameters with the colors you want. Also, if you want to include the header subcomponent you have to set the name of the image there and put the image under the src/images/ directory. The rest of the photos that will be used will be added at the same folder but you need to define their names inside the data.json file. Don't worry about it for now, it will be clear later. 😊

### 1. About Me <br>
name: about_me 
The about_me component has 2 subcomponents, the header and the details. You can skip any of them, if you want.
  #### 1. Header 
  name: header
  ![header](/images/header.PNG)

  #### 2. Details 
  name: details
  ![details](/images/details.PNG)

### 2. Timeline <br>
name: timeline <br>
At this component you can add your experience and your education data.
![header](/images/timeline.PNG)

### 3. Skills <br>
name: skills <br>
At this component you can add your skills.
![skills](/images/skills.PNG)

### 4. Languages <br>
name: languages <br>
 At this component you can add the language you speak.
![languages](/images/languages.PNG)

### 4. Projects <br>
tag: projects <br>
 At this component you can add your projects.
![projecrs](/images/projects.PNG)

### 4. Contact me <br>
name: contact_me_1
![contact_me_1](/images/contact_me_1.PNG)
 
You can use an alternative contact_me component, called contact_me_2 but we strongly recommend using the contact_me_1, which is shown below. However, if you really want to use the second option you can use EmailJS. 

![contact_me_2](/images/contact_me_2.PNG)
<br>
<br>
### You can follow the given example and add your own data. 😊
