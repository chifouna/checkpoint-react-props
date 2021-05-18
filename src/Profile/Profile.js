import React from 'react'
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types'


const Profile = ({ profile,
    children, alertName, desc }) => {
        return (
            <>
            <div className='cimg'>
            <img className='img' src={profile.img} alt='image1'></img>
            <Button onClick={() => alertName(profile.Name)}>MY INSTARGAM</Button>{' '}
            </div>
            <div className='profile'>
                <h1>{profile.Name}</h1>
                <p style={{ textalign: 'center'}}>{profile.bio}</p>
                <p className='profission'>{profile.profession}</p>
                {children}
                <p className='copyright'>{desc}</p>


            </div>
            </>
        )
    }

    Profile.propTypes ={
        profile: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Profession: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
        }),
        alertName: PropTypes.func.isRequired,
    };

    Profile.defaultProps ={
        desc: "No Data Description",
    };
    
export default Profile