import React from "react";


export default class Resume extends React.Component {

    
    render() {
        return (
	        <div class="resumeContainer">
		        <div class="row">
		            <div class="col-lg-3">
					    <h4>View My Resume</h4>
		            </div>
		            <br/>
		            <br/>
		            <div class="col-lg-9">
					    <div class="resumeIframe">
					        <iframe src="https://drive.google.com/file/d/0B-DDs62_P7pEYjVpVklpVXhDNEU/preview" width="640" height="480"></iframe>
					    </div>
		            </div>
		        </div>
		        <div class="row">
		            <div class="col-lg-12">
		                <h5>WORK</h5>
		            </div>
		        </div>
		        <div class="row">
		            <br/>
		            <div class="col-lg-6 col-lg-offset-3">
		                <p>
		                    Job title
		                    <ul>
		                        <li>job description</li>
		                       
		                    </ul> 
		                </p>
		            </div>
		            <div class="col-lg-3">
		                <p>
		                    <sm>year</sm>
		                </p>
		            </div>
		            
		        </div>
		        <br/>
		        <br/>
	   		</div>
        );
    }
}