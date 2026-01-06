# Git Push Guidelines (PowerShell)

A concise, readable guide you can follow every time you push changes to GitHub.

---

## 1) Quick checks
```powershell
cd 'C:\Users\vyasa\My Files\Homepage'
git status
git branch --show-current
git log --oneline -n 5
```

## 2) Stage & commit
- Stage all changes:
```powershell
git add -A
```
- Commit with a clear message:
```powershell
git commit -m "Short, meaningful message"
```

## 3) Sync with remote (recommended: rebase then push)
```powershell
# Fetch + rebase your commits on top of origin/main
git pull --rebase origin main
# Then push
git push origin main
```

### Conflict handling while rebasing
1. Fix conflicts in your editor.
2. Stage fixed files:
```powershell
git add <file-you-fixed>
```
3. Continue rebase:
```powershell
git rebase --continue
```
4. To abort rebase and return to previous state:
```powershell
git rebase --abort
```

## 4) If you prefer merging (simpler, creates merge commits)
```powershell
git pull origin main
git push origin main
```

## 5) New branch workflow (recommended for features)
```powershell
git checkout -b feature/short-name
# work, commit...
git push -u origin feature/short-name
```

## 6) If push is rejected (remote has new commits)
Recommended: rebase flow (see step 3).

You can inspect differences first:
```powershell
git fetch origin
# commits local but not remote
git log --oneline HEAD..origin/main
# commits remote but not local
git log --oneline origin/main..HEAD
```

## 7) Force push (use caution)
Prefer safer force:
```powershell
git push --force-with-lease origin main
```

## 8) Useful commands
```powershell
git remote -v
git log --oneline -n 10
```

## 9) Auth tips
- Use SSH (recommended) — add your public SSH key to GitHub.
- Or use HTTPS with a Personal Access Token (PAT).

---

### Best practices
- Make small, focused commits.
- Use feature branches and PRs for collaborative work.
- Run `git pull --rebase` before pushing to avoid rejected pushes.

If you hit an error, copy-paste the exact message here and I’ll walk you through it.
