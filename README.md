
# Dat Test Case

This project is a solution proposal for the task stated in the [dat-test-case](https://github.com/ArmanSarkisov/dat-test-case/blob/main/README_EN.md)

## Used Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

☄️ Effector

## How to use the Plugin
Clone the respository
    
    git clone https://github.com/oscarsaravia/dat-test-case.git

Install dependencies

    npm install

Generate the build

    npm run build

In the *dist* directory, two files will be generated

    1. plugin.js
    2. plugin.css

Open the html file of the application you want to embedd the plugin, make sure you add the following tags in the head section

```
<!-- Include the generated JS -->
<script type="module" crossorigin src="<path_to_directory>/plugin.js"></script>
<!-- Include the generated CSS -->
<link rel="stylesheet" href="<path_to_directory>/plugin.css">
```

Now we need to initialize the plugin, make sure you copy the following code in the body of the html file
```
<div id="root"></div>
<!-- Initialization script -->
<script>
    document.addEventListener("DOMContentLoaded", () => {
        window.PLUGIN && window.PLUGIN.init({
            selector: "#root",
            options: {
                initializedOptions: [],
                onPositionChange(positions) {
                    console.log(positions);
                },
                onComplete(positions) {},
                onInit() {
                    console.log('CALLING INIT FUNCTION');
                }
            }
        });
    });
</script>
```
## Author

- [@oscarsaravia](https://github.com/oscarsaravia)


