import React from "react";
import ReactPDF from 'react-pdf';

export default class Resume extends React.Component {
  onDocumentLoad({ total }) {
        this.setState({ total });
    }
 
    onPageLoad({ pageIndex, pageNumber }) {
        this.setState({ pageIndex, pageNumber });
    }
    
    render() {
        return (
            <div>
                <ReactPDF
                    file="../../public/resume.pdf"
                    pageIndex={2}
                    onDocumentLoad={this.onDocumentLoad}
                    onPageLoad={this.onPageLoad}
                />
                <p>Page {this.state.pageNumber} of {this.state.total}</p>
            </div>
        );
    }
}