Git workflow

git checkout {your working branch} // ex) git checkout jason
git pull // before push your change, please pull first
git add // Selects your file which you make change, and moves it to the staging area // ex) git add Configuration.java or git add . -> when you want to add all changed files
git commit -m "Your message" // Captures a snapshot of the project's currently staged changes
(optional) git tag -a {version name} "Your message"
git push // push your files to remote repo (please do after git pull)
(optional) git push origin --tags
Make a PR
Merge your code after someone reviews
git checkout main // after merging your code into remote branch
git pull // make your local repo updated
git checkout {your working branch} // Keep working on your code