import React, { Component, Fragment } from "react";
import withContext from "../../hoc/ContextConsumer";

class BulkUpload extends Component {
  render() {
    return (
      <Fragment>
        <div className="role remove-item">
          <div className="left-content">
            <div className="change-photo">
              <div className="upload-photo">
                <label className="btn btn-primary" htmlFor="upload-file">
                  <input
                    type="file"
                    id="upload-file"
                    name="uplaod-photo"
                    onChange={() => {
                      this.props.context.uploadExcel(this.files);
                    }}
                    ref={ele => (this.files = ele)}
                  />
                  Change Photo
                </label>
                <span className="max-size">Max 20 MB</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withContext(BulkUpload);
