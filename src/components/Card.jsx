const Card = ({ item }) => {
    return (  
        <div key={item.id} className='item'>
        <div className='image'>
       <img  src={item.urls.small} alt={item.alt_description} />
       <a className="btn-save" href="">Guardar</a>
       <a className="icon-upload" href=""><img src='/public/uploadicon.png' alt="upload"/></a>
       <a className="icon-dots" href=""><img src="/public/dotsicon.png" alt="options"/></a>
       </div>
       <p>{item.description}</p>
       <div>
       <img className='user' src={item.user.profile_image.small} alt={item.user.name}/>
       <span>
        {item.user.name}
       </span>
       </div>
       </div>
    );
}
 
export default Card;