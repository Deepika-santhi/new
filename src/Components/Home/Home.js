import React, { useState,useEffect } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'
export default function Home() {
    const [name,setname]=useState("Octocat");
    const [result,setresult]=useState([]);
    const [image,setimage]=useState(null);
    const [date,setdate]=useState(null);
    const [theme,settheme]=useState(false);
    useEffect(() => {
    
     setimage(result.avatar_url)
    }, [])
    
const handlesearch=()=>
{
console.log(name);
fetch(`https://api.github.com/users/${name}`).then(
    function(resp)
    {
        return resp.json()
    }
).then(
    function(data)
    {
        console.log(data);
        setresult(data);
        console.log(result);
        
        let number=new Date(result.created_at);
       let arr=(number.toString().split(" "));
       let str=arr[2]+" "+arr[1]+" "+arr[3];
        if(arr[2]!=undefined)
        {
       setdate(str);
        }
        
        
    }
)

}
const handletheme=()=>
{
    settheme(!theme);
    console.log(theme);
}

  return (
    <div className={style.whole}>
        <div className={style.main+" "+(theme?style.main1:null)}>
            <div className={style.head+" "+(theme?style.main1:null)}>
                <div className={style.top+" "+(theme?style.main1:null)}>
                    <p className={style.name+" "+(theme?style.textcolor:null)}>devfinder</p>
                   <div className={style.mode} onClick={handletheme}>
                    {theme?<p className={style.modename+" "+style.textcolor}>LIGHT</p>:<p className={style.modename}>DARK</p>}
                    {theme?<img src="assets/icon-sun.svg" className={style.image}></img>:<img src="assets/icon-moon.svg" className={style.image}></img>}
                   </div>
                </div>

                <div className={style.inputdiv+" "+(theme?style.top1:null)}>
                    <img src="assets/icon-search.svg" alt='Loading..' className={style.icon}></img>
                    <input type={"text"} placeholder={"Searching Github Username"} onChange={(e)=>{setname(e.target.value)}} className={theme?style.top1+" "+style.textcolor:null} autoFocus={true}></input>
                    <button className={style.but} onClick={handlesearch}>Search</button>
                </div>
            </div>
            <div className={style.second+" "+(theme?style.top1:null)}>
                    <div className={style.imgdiv}><img src={`${image}`} className={style.avatar}/></div>
                    <div className={style.resdiv}>
                        <div className={style.info}>
                    <p className={style.username+" "+(theme?style.textcolor:null)}>{result.name}</p>
                    
                    {date?<p className={style.userdate+" "+(theme?style.textcolor:null)}>Joined {date}</p>:<p className={style.userdate+" "+(theme?style.textcolor:null)}></p>}
                    </div>
                    {
                        result.login?<p className={style.login}>@{result.login}</p>:<p className={style.login}></p>
                    }
                    {
                        result.bio?<p className={style.bio+" "+(theme?style.textcolor:null)}>{result.bio}</p>:<p className={style.bio}>This profile has no bio</p>
                    }

                    <div className={!theme?style.box:style.changebox}>
                        <div className={style.box1}>
                            <p className={style.boxhead+" "+(theme?style.textcolor:null)}>Repos</p>
                            <p className={style.boxhead+" "+(theme?style.textcolor:null)}>Followers</p>
                            <p className={style.boxhead+" "+(theme?style.textcolor:null)}>Following</p>
                        </div>
                        <div className={style.box1}>
                            
                            {
                               result.public_repos? <p className={style.boxhead1+" "+(theme?style.textcolor:null)}>{result.public_repos}</p>: <p className={style.boxhead1+" "+(theme?style.textcolor:null)}>0</p>

                            }
                             {
                               result.followers?  <p className={style.boxhead1+" "+(theme?style.textcolor:null)}>{result.followers}</p>: <p className={style.boxhead1+" "+(theme?style.textcolor:null)}>0</p>

                            }
                             {
                               result.following?  <p className={style.boxhead1+" "+(theme?style.textcolor:null)}>{result.following}</p>: <p className={style.boxhead1+" "+(theme?style.textcolor:null)}>0</p>

                            }
                           
                           
                        </div>
                    </div>
                    <div className={style.last+" "+(theme?style.top1:null)}>
                        <div className={style.last1}>
                            {
                                result.location?<img src="assets/icon-location.svg" className={style.lastimg}/>:<img src="assets/icon-location.svg" className={style.lastimg+" "+style.changeimg}/>
                            }
                            
                            {
                                result.location?<p className={style.lasttext+" "+(theme?style.textcolor:null)}>{result.location}</p>:<p className={style.lasttext+" "+(theme?style.textcolor:null)}>Not Available</p>
                            }
                            
                        </div>
                        <div className={style.last1}>
                            {
                                result.twitter_username? <img src="assets/icon-twitter.svg" className={style.lastimg}/>: <img src="assets/icon-twitter.svg" className={style.lastimg+" "+style.changeimg}/>
                            }
                            
                            {
                                result.twitter_username? <p className={style.lasttext+" "+(theme?style.textcolor:null)}> <a href={`https://twitter.com/${result.twitter_username}`} className={style.linker+" "+(theme?style.textcolor:null)}>@{result.twitter_username}</a></p>: <p className={style.lasttext+" "+(theme?style.textcolor:null)}>Not Available</p>
                            }
                       
                      
                        </div>
                        <div className={style.last1}>
                           {
                                result.blog?<img src="assets/icon-website.svg" className={style.lastimg}/>:<img src="assets/icon-website.svg" className={style.lastimg+" "+style.changeimg}/>
                            }
                            
                            {
                                result.blog?<p className={style.lasttext+" "+(theme?style.textcolor:null)}>  {result.blog}</p>:<p className={style.lasttext+" "+(theme?style.textcolor:null)}>Not Available</p>
                            }
                        
                        
                        </div>
                        <div className={style.last1}>
                            {
                                result.company?<img src="assets/icon-company.svg" className={style.lastimg}/>:<img src="assets/icon-company.svg" className={style.lastimg+" "+style.changeimg}/>
                            }
                            
                            {
                                result.company? <p className={style.lasttext+" "+(theme?style.textcolor:null)}>{result.company}</p>: <p className={style.lasttext+" "+(theme?style.textcolor:null)}>Not Available</p>
                            }
                        
                       
                        </div>
                    </div>
                </div>
                </div>
                
        </div>

    </div>
  )
}
