import React,{Component} from 'react';
import "./styleSidebar.css"
export default class Sidebar extends Component
{
	render()
	{
		return(
			<div id='side'>
			<div className='row'>
				<div className='col-md-3'></div>
					<div className='col-md-7'>
						<div className="circle">
							  <div className="circle__inner">
							    <div className="circle__wrapper">
							      <br /><br /><br />
							      <div><h1 style={{fontSize:'600%'}}>AJ</h1></div>
							    </div>
							  </div>
							</div>
					</div>
				<div className='col-md-2'></div>
			</div>
				<div className='name' style={{fontFamily: "'Montserrat', sans-serif",color:"white"}}><center><h1>Ayush Jain</h1></center></div>
				<div className='desig' style={{fontFamily: "'Montserrat', sans-serif",color:"white"}}><center><h5>Software Developer</h5></center></div>
				<br />
				
				<div className='desig' style={{fontFamily: "'Montserrat', sans-serif",color:"white",paddingLeft:'7%'}}><h3><u>Your Account</u></h3></div>
				<br/>
				<a><div className='desig activ' style={{fontFamily: "'Montserrat', sans-serif",color:"white",paddingLeft:'7%',paddingRight:'7%',paddingBottom:'3%'}}><h4>HOME</h4></div></a>
				<a><div className='desig' style={{fontFamily: "'Montserrat', sans-serif",color:"white",paddingLeft:'7%',paddingRight:'7%',paddingBottom:'5%'}}><h4>Settings</h4></div></a>
				<a><div className='desig' style={{fontFamily: "'Montserrat', sans-serif",color:"white",paddingLeft:'7%',paddingRight:'7%',paddingBottom:'5%'}}><h4>Help</h4></div></a>

			</div>

			);
	}
}