/* eslint-disable class-methods-use-this */
import React from 'react';
import emailjs from 'emailjs-com';
import FormInfo from '../components/FormInfo';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      messageError: false,
      nameError: false,
      emailError: false,
      mailSent: false,
      errorMessageMail: '',
      canSendMail: true,
    };
    this.validateMail = this.validateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSpam = this.handleSpam.bind(this);
  }

  validateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail,
      )
    ) {
      return true;
    }
    return false;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  sendEmail(e) {
    emailjs
      .sendForm(
        'service_tdsfb7l',
        'template_wj7ypeo',
        e.target,
        'user_7cTomN836wx2tRLV5dvDd',
      )
      .then(
        (result) => {
          this.setState({ mailSent: result.text });
        },
        (error) => {
          this.setState({ mailSent: 'error', errorMessageMail: error });
        },
      );
  }

  handleSpam(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    if (name) {
      if (email && this.validateMail(email)) {
        if (message) {
          this.setState({
            canSendMail: false,
            messageError: false,
            nameError: false,
            emailError: false,
          });
          this.sendEmail(e);
        } else {
          this.setState({ messageError: true });
        }
      } else {
        this.setState({ emailError: true });
      }
    } else {
      this.setState({ nameError: true });
    }
  }

  render() {
    const {
      name,
      email,
      message,
      messageError,
      nameError,
      emailError,
      mailSent,
      errorMessageMail,
      canSendMail,
    } = this.state;

    return (
      <nav className="fullwidth" id="Contact">
        <div className="container ">
          <div className="row justify-content-center">
            <div>
              <h3 className="infoTitile4 mrg-top">Contact </h3>
              <p className="form-mrgb">
                Interested in collaborating? I&apos;d love to hear from you!
              </p>
            </div>
          </div>
          <div className="container smallCont">
            {mailSent === 'OK' ? (
              <div className="row mailsent justify-content-center align-content-center">
                <p className="confirmMail">
                  Your Email was sent! I will get in touch ASAP!
                </p>
              </div>
            ) : (
              <div className="formContainer">
                {mailSent === 'error' ? (
                  <div className="row mailsent justify-content-center align-content-center">
                    <p className="confirmMailWrong">
                      There was an Error prossesing your mail please try again
                      later!
                    </p>
                    <p>{errorMessageMail}</p>
                  </div>
                ) : (
                  <div>
                    {canSendMail ? (
                      <form onSubmit={this.handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 col-md-6">
                            {nameError ? (
                              <p className="errorCode">
                                Name can&apos;t be empty
                              </p>
                            ) : (
                              <div />
                            )}
                            <input
                              className={`form-control inputContent ${
                                nameError ? 'error' : ''
                              }`}
                              placeholder="Your name"
                              onChange={this.handleChange}
                              name="name"
                              value={name}
                            />
                          </div>
                          <div className="col-lg-6 col-sm-12 col-md-6">
                            {emailError ? (
                              <p className="errorCode">
                                Please enter a valid e-mail adress
                              </p>
                            ) : (
                              <div />
                            )}
                            <input
                              className={`form-control inputContent ${
                                emailError ? 'error' : ''
                              }`}
                              placeholder="Your email"
                              onChange={this.handleChange}
                              name="email"
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col form group">
                            {messageError ? (
                              <p className="errorCode2">
                                Message can&apos;t be empty
                              </p>
                            ) : (
                              <div />
                            )}
                            <textarea
                              className={`inputContent form-control ${
                                messageError ? 'error' : ''
                              }`}
                              rows="10"
                              placeholder="Your Message"
                              onChange={this.handleChange}
                              name="message"
                              value={message}
                            />
                          </div>
                        </div>
                        <button
                          className="btn btn-dark float-right"
                          type="submit"
                        >
                          Get in touch
                        </button>
                      </form>
                    ) : (
                      <form onSubmit={this.handleSpam}>
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 col-md-6">
                            {nameError ? (
                              <p className="errorCode">
                                Name can&apos;t be empty
                              </p>
                            ) : (
                              <div />
                            )}
                            <input
                              className={`form-control inputContent ${
                                nameError ? 'error' : ''
                              }`}
                              placeholder="Your name"
                              onChange={this.handleChange}
                              name="name"
                              value={name}
                              readOnly
                            />
                          </div>
                          <div className="col-lg-6 col-sm-12 col-md-6">
                            {emailError ? (
                              <p className="errorCode">
                                Please enter a valid e-mail adress
                              </p>
                            ) : (
                              <div />
                            )}
                            <input
                              className={`form-control inputContent ${
                                emailError ? 'error' : ''
                              }`}
                              placeholder="Your email"
                              onChange={this.handleChange}
                              name="email"
                              value={email}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col form group">
                            {messageError ? (
                              <p className="errorCode2">
                                Message can&apos;t be empty
                              </p>
                            ) : (
                              <div />
                            )}
                            <textarea
                              className={`inputContent form-control ${
                                messageError ? 'error' : ''
                              }`}
                              rows="10"
                              placeholder="Your Message"
                              onChange={this.handleChange}
                              name="message"
                              value={message}
                              readOnly
                            />
                          </div>
                        </div>
                        <button
                          className="btn btn-light float-right"
                          type="submit"
                        >
                          Sending Mail...
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            )}
            <div className="container formtAffter">
              <div className="row">
                <p className="linksFormText col">mario_dena@outlook.com</p>{' '}
                <FormInfo />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default ContactForm;
