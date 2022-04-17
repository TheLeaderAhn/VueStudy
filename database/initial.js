const TYPE = require('./type.js')

function fn_about_me(db) {
    db.run(
      'CREATE TABLE IF NOT EXISTS tbl_about_myself (name TEXT , email TEXT, UNIQUE(name, email))',
      (err) => {
        if (!err) {
          db.run(
            "INSERT OR IGNORE INTO tbl_about_myself (name, email) VALUES ('DOPT', 'armigar@naver.com')"
          )
        }
      }
    )
  }

function fn_resume(db) {
    db.run('CREATE TABLE IF NOT EXISTS tbl_my_resume (data DATE, title TEXT, content TEXT,url TEXT, UNIQUE(date,title))',
        (err) => {
            if(!err) {
                const resume = [
                    { 
                        date : '1989-07-05',
                        title : '탄생',
                        content :  '빛에 도달하다',
                        url : null, 
                    },
                    {
                        date :'2022-04-15',
                        title :  'vue3 열공중',
                        content : 'MSA 공부를 위한 개인 프로젝트 VUE 공부',
                        url:null,
                    },
                    {
                        date :'2022-04-17',
                        title :  '황금같은 일요일 마무리하자!!..',
                        content : 'vue3 마무리 단계~~~~',
                        url:null,
                    },
                    
                ]
                resume.forEach((item) => {
                    const query = "INSERT OR IGNORE INTO tbl_my_resume(date, title, content, url) VALUES ('${item.date}','${item.title}','${item.content}','${item.url}')"
                    db.run(query)
                })
            }
        }
    )
}

function fn_applications(db) {
    db.run(
      'CREATE TABLE IF NOT EXISTS tbl_applications (id INT, name TEXT , content TEXT, date DATE, platform TEXT, url TEXT, image TEXT, UNIQUE(name, date))',
      (err) => {
        if (!err) {
          const applications = [
            {
              id: 1,
              name: '힘을 찾아런',
              content:
                '아주 간단한 런닝 게임인 "힘을 찾아런"을 소개합니다. 별다른 생각 없이 시간을 죽이기에 적합한 게임입니다. 플레이 제약을 통한 스트레스 없이 무제한으로 즐길 수 있으며, 골드 역시 스트레스 받지 않을정도로 드립니다. 점프 하나로 모험을 떠나고 보스를 물리치세요!',
              date: '2017-07-01',
              platform: 'Android',
              url:
                'https://play.google.com/store/apps/details?id=com.dopt.rfp1&hl=ko&gl=US',
              image: 'http://localhost:8000/assets/runforpower.png',
            },
            {
              id: 2,
              name: 'DongAutoClicker',
              content:
                '게임을 즐기거나 자동화 테스트를 위해 마우스를 정해진 패턴대로 움직이게 할 수 있는 프로그램입니다.',
              date: '2018-10-14',
              platform: 'Windows',
              url: 'https://m.blog.naver.com/armigar/221377064681',
              image: 'http://localhost:8000/assets/dongautoclicker.png',
            },
          ]
  
          applications.forEach((item) => {
            const query = `INSERT OR IGNORE INTO tbl_applications (id, name, content, date, platform, url, image) VALUES (${item.id}, '${item.name}', '${item.content}', '${item.date}', '${item.platform}' , '${item.url}', '${item.image}')`
            db.run(query)
          })
        }
      }
    )
  }
module.exports.run = function(db, type) {
    if(type == TYPE.about_me) {
        fn_about_me(db)
    } else if (type == TYPE.resume) {
        fn_resume(db)
    } else if (type == TYPE.applications){
        fn_applications(db)
    }
}
