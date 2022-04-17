const sqlite3 = require('sqlite3')
const express = require('express')
const cors = require('cors')
const app = express()
app.disable('x-powered-by')
app.use(cors())

const PORT = 8000
let db = new sqlite3.Database('database.db', (err) => {
  if (!err) {
    db.run(
      'CREATE TABLE IF NOT EXISTS tbl_about_myself (name TEXT , email TEXT, UNIQUE(name, email))',
      (err2) => {
        if (!err2) {
          db.run(
            "INSERT OR IGNORE INTO tbl_about_myself (name, email) VALUES ('DOPT', 'armigar@naver.com')"
          )
        }
      }
    )
    db.run(
      'CREATE TABLE IF NOT EXISTS tbl_my_resume (date DATE, title TEXT, content TEXT, url TEXT, UNIQUE(date, title))',
      (err2) => {
        if (!err2) {
          const resume = [
            {
              date: '1989-07-05',
              title: '탄생',
              content: '백제의 마지막 수도에서 태어나다!!',
              url: null,
            },
            {
              date: '2003-01-01',
              title: 'Play Ground Gaming Inc.',
              content:
                'ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ',
              url: null,
            },
            {
              date: '2022-04-20',
              title: 'Vue3 Project ',
              content:
                '유튜브 채널!!!',
              url: 'https://www.youtube.com/',
            },
          ]
          resume.forEach((item) => {
            const query = `INSERT OR IGNORE INTO tbl_my_resume (date,title,content,url) VALUES ('${item.date}', '${item.title}', '${item.content}', '${item.url}')`
            db.run(query)
          })
        }
      }
    )
  }
})

app.listen(PORT, () => {
  console.log(`Listening... ${PORT}`)
})
app.get('/', (req, res, next) => {
  res.json({ rsp: 'ok' })
})

app.get('/db/about-me', (req, res, next) => {
  let result = {
    rsp: 'fail',
  }
  db.get('SELECT * FROM tbl_about_myself', (err, row) => {
    if (!err) {
      result.data = row
      db.all('SELECT * FROM tbl_my_resume ORDER BY date desc', (err2, rows) => {
        if (!err2) {
          result.rsp = 'ok'
          result.data.resume = rows
          res.json(result)
        } else {
          res.json(result)
        }
      })
    } else {
      res.json(result)
    }
  })
})