import React, { Component } from "react";

const faqData = [
  {
    id: 1,
    title: "Aenean viverra rhoncus?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 2,
    title: "Pellentesque habitant morbi tristique?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 3,
    title: "Aenean viverra rhoncus?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 4,
    title: "Pellentesque habitant morbi tristique?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 5,
    title: "Aenean viverra rhoncus?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 6,
    title: "Pellentesque habitant morbi tristique?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 7,
    title: "Aenean viverra rhoncus?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 8,
    title: "Pellentesque habitant morbi tristique?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  }
];

class Faq extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="container">
          {/* /.tr-map */}
          <div className="contact-section">
            <div className="row">
              <div className="col-md-12">
                <div className="section">
                  <span className="tr-title">Frequently Asked Questions</span>
                  {faqData.map(post => {
                    return (
                      <React.Fragment key={post.id}>
                        <div>
                          <h3 className="faq-title">{post.title}</h3>
                          <p>{post.content}</p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
    );
  }
}

export default Faq;
