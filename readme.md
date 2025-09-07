# Sleeper.com weekly matchup extractor bookmarklet

_First season playing Fantasy Football through Sleeper.com and I wanted a way to store weekly matchups in my notes so I built this bookmarklet that turns the weekly matchup view into a markdown table._

Create a Markdown table from https://sleeper.com/leagues/[league-id]/matchup page for the week.

![Screenshot of the first few results mid-week in Sleeper.com](docs/screenshot.png)

## How to use

Copy the code from [toMarkdown-bookmarklet.js](toMarkdown-bookmarklet.js) into the URL field of a new bookmark.

Click the bookmarklet when on Sleeper.com weekly matchup view to copy a Markdown table to clipboard.

Format:

| Me                   | Score | -   | Score | Opponent               |
| -------------------- | ----- | --- | ----- | ---------------------- |
| J. Burrow (QB, CIN)  | -     | -   | -     | B. Nix (QB, DEN)       |
| J. Taylor (RB, IND)  | -     | -   | -     | B. Irving (RB, TB)     |
| J. Warren (RB, PIT)  | -     | -   | -     | B. Hall (RB, NYJ)      |
| C. Lamb (WR, DAL)    | 18.00 | -   | -     | J. Jefferson (WR, MIN) |
| D. Metcalf (WR, PIT) | -     | -   | -     | D. Adams (WR, LAR)     |
| T. Kelce (TE, KC)    | 12.70 | -   | -     | D. Kincaid (TE, BUF)   |
| C. Kupp (WR, SEA)    | -     | -   | -     | C. Hubbard (RB, CAR)   |
| PIT (DEF, PIT)       | -     | -   | 4.00  | KC (DEF, KC)           |

**Bench**

| Me                      | Score | -   | Score | Opponent              |
| ----------------------- | ----- | --- | ----- | --------------------- |
| A. Rodgers (QB, PIT)    | -     | -   | -     | B. Allen (RB, NYJ)    |
| Z. Charbonnet (RB, SEA) | -     | -   | -     | T. Etienne (RB, JAX)  |
| J. Higgins (WR, HOU)    | -     | -   | -     | C. Godwin (WR, TB)    |
| Z. Ertz (TE, WAS)       | -     | -   | -     | J. Williams (WR, DET) |
