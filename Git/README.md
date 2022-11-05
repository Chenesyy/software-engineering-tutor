### To create new repo: 
- **git init**

### To add remote repo into your local:
- **git init (if hindi pa na i-initialize)**
- **git remote -v (to check current remote)**
- **git remote add origin <repo_http_URL>**

### To change repo:
- **git remote set-url origin/upstream <repo_http_URL>**
- **git remote -v (to double check if nagbago)**

### To stage and unstage files:
- **git add <file_path>/<folder_path>**
- **git rm --cached <file_path>/<folder_path>** OR
- **git restore --staged <file_path>/<folder_path>**

### To undo a recent commit:
- **git reset --soft HEAD~1**

### To set default remote branch to current local branch:
- **git push --set-upstream origin master (sineset mo na si master branch yung pupull/pupush mo na branch every time)**

### To commit changes to repo:
- **git status**
- **git add <file_path>/<folder_path>**
- **git commit -m “<message>”**
- **git push**

Others:
git stash
git branch
git checkout .
git switch 
git checkout -b <branch_name>
git pull (git fetch + git merge)
git merge develop
git clone


