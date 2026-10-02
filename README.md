# IELTS 30 — A Month to Band 8

A free, single-page IELTS preparation tracker. 30 days, 90 tasks, covering Reading, Writing, Listening and Speaking from basics to advanced technique, with an examiner tip on every day.

Progress is saved in the visitor's own browser via `localStorage` — there is no backend, no account, and nothing is uploaded anywhere. Every visitor tracks their own progress independently.



## Editing the content

All 30 days live in the `PLAN` array inside the `<script>` tag at the bottom of `index.html`. Each entry looks like this:

```js
{d:1, w:1, f:"all", p:"basic", t:"Orientation", tip:"…", k:[
  ["Task name","Task description","tag"],
  …
]}
```

- `d` — day number (1–30)
- `w` — week (1–4)
- `f` — focus skill: `reading`, `writing`, `listening`, `speaking` or `all`
- `p` — phase: `basic`, `intermediate` or `advanced`
- `t` — short day title
- `tip` — the examiner tip shown in the highlighted box
- `k` — the task list

Change the text, add tasks, or extend beyond 30 days — the dashboard, filters and progress maths all adapt automatically.

## Notes

- Clearing browser data or using private/incognito mode will reset progress.
- Keyboard: left and right arrow keys move between days.
- No build step, no dependencies, no tracking.
