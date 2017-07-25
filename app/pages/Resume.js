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
		        <br/>
		        <br/>
	   		</div>
        );
    }
}