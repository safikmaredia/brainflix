import Post from '../../Assets/Icons/add_comment.svg';
import Avatar from '../../Assets/Images/Mohan-muruge.jpg';
import './Form.scss';

export default function Form(){
    return (

<div className='form'>
<label className='form__label'>JOIN THE CONVERSATION</label>
<div className='form__input-container'>
<input className='form__input' name='comment' for='comment' placeholder='Add a new comment'/>

<button className='form__button'>COMMENT</button>


</div>
<img className='form__comment-icon' src={Post} alt='post'/>
<img className='form__avatar' src={Avatar} alt='avatar'/>
</div>
    )}