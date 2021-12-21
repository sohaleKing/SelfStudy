***************************************************************
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub
**************************************************************


version control system (VCS) a tool to allow them to collaborate with other developers on a project without the danger of them overwriting each other's work, and roll back to previous versions of the code base if a problem is discovered later on.
--------------------------------------------------------------------------------------
You can then do the following commands to get any changes I add to the class repo

git remote add upstream (only need to do this once, you can rename "upstream" to "bobby" or "ycit027" if you want)
git fetch upstream (or whatever you renamed "upstream" to)
git rebase upstream/main
git push -f upstream main (do this after the rebase to update your remote branch)

-------------------------------------------------------------------------------------
A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.
What are the major differences between Forking and Cloning? ... When you fork a repository, you create a copy of the original repository (upstream repository) but the repository remains on your GitHub account. Whereas, when you clone a repository, the repository is copied on to your local machine with the help of Git.
---------------------------------------------------------------------------------------
1- git init
2- git add . 
3- git commit -m "your message"
4- git remote add <origin> <the repo URL>
5- git push