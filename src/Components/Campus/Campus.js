

import'./Campus.css'
const  dataCampus=[
  {
    img:'https://devplus.edu.vn/assets/images/devplus/One_plus.png',
    item:'One plus (+) Programing foundation'
  },
  {
    img:'https://devplus.edu.vn/assets/images/devplus/Two_plus.png',
    item:'Two plus (++) Skill up to to get ready'
  },
  {
    img:'https://devplus.edu.vn/assets/images/devplus/Three_plus.png',
    item:'Three plus (+++) How to become a senior'

  }
]
function Campus(){
    return(
        <section class="our-campus">
        <div class="content-campus">
          <div class="campus-container">
            <div class="campus-heading">
              <h2>Our main campus</h2>
            </div>
            <div class="campus-row">
                 {dataCampus.map((title,index)=>(

                  <div class="campus-cover fade up" key={index}>
                  <div class="campus-size">
                    <div class="campus-img">
                      <img src={title.img} alt="one plus"/>
                    </div>
                    <div class="campus-title">
                      <h3>{title.item}</h3>
                    </div>
                  </div>
                </div> 
                 ))}
            </div>
        
          </div> 
        </div>
      </section>
    )
}
export default Campus;

