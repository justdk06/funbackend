require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
  "login": "justdk06",
  "id": 136125899,
  "node_id": "U_kgDOCB0dyw",
  "avatar_url": "https://avatars.githubusercontent.com/u/136125899?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/justdk06",
  "html_url": "https://github.com/justdk06",
  "followers_url": "https://api.github.com/users/justdk06/followers",
  "following_url": "https://api.github.com/users/justdk06/following{/other_user}",
  "gists_url": "https://api.github.com/users/justdk06/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/justdk06/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/justdk06/subscriptions",
  "organizations_url": "https://api.github.com/users/justdk06/orgs",
  "repos_url": "https://api.github.com/users/justdk06/repos",
  "events_url": "https://api.github.com/users/justdk06/events{/privacy}",
  "received_events_url": "https://api.github.com/users/justdk06/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Dharmendra Kumar",
  "company": null,
  "blog": "",
  "location": "Chennai,India",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-06-09T20:46:12Z",
  "updated_at": "2025-05-17T11:50:30Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('dharmendradotcom')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login at chai aur code')
})

app.get('/youtube',(req,res) =>{
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
