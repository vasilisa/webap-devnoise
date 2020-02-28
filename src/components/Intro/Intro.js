import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Intro.css';

import './bootstrap.min.css';


// Fetch participant data onClick after veryfing that all the boxes are ticked 
const Checkbox = props => (
  <input type="checkbox" {...props} />
)

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }

    this.redirectToTarget.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }
    
  
  redirectToTarget(){

    this.props.history.push({
      pathname: `/Instructions`,
    })
  }

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked})
    
render() {
  return (
      <div>
        <div className="IntroConsentText">
        <div>
          <p><span class="bold">CONSENT</span></p>
          <p><span class="bold">INFORMATION FOR THE PARTICIPANT</span></p>
          <p>You are about to participate in the research study entitled: Learning in changing environments</p>
          <p>Researcher in charge: Dr. Valentin WYART.</p> 
          <p>This study aims to understand the learning and decision-making. Its fundamental purpose is to investigate the cognitive mechanisms of these learning and decision-making processes. 
          The proposed experiment has no immediate application or clinical value, but it will allow us to improve our understanding of the brain functioning.
          We are asking you to participate in this study because you have been recruited by the RISC or Prolific platforms.</p>
          <p><span class="bold">PROCEDURE</span></p>
          <p>
          During your participation in this study, we will ask you to play a game and to answer a questionnaire at the end, which do not require any particular competence. 
          Your internet-based participation will require approximately 40 minutes.
          </p>
          <p><span class="bold">VOLUNTARY PARTICIPATION AND CONFIDENTIALITY</span></p>
          <p>Your participation in this study is voluntary. This means that you are consenting to participate in this project without external pressure. During your participation in this project, the researcher in charge and his staff will collect and record information about you.
          In order to preserve your identity and the confidentiality of the data, the identification of each file will be coded, thus preserving the anonymity of your answers. We will not collect any personal data from the RISC or Prolific platforms. Your data will be kept confidential and 
          the researcher in charge of this study will only use the data for research purposes in order to answer the scientific objectives of the project. The data may be published in scientific journals, in which case no publication or scientific communication will contain identifying information.
          </p>
          <p><span class="bold">RESEARCH RESULTS AND PUBLICATION</span></p>
          <td>You will be able to check the publications resulting from this study by following</td><div></div><td><a href={"https://sites.google.com/site/valentinwyart/publications"}>this link</a></td>
          <p></p>
          <p><span class="bold">CONTACT AND ADDITIONAL INFORMATION</span></p>
          <p>Email: valetin.wyart@ens.fr</p>
          <p>This research was approved by the Inserm Ethical Review Committee: IRB00003888 on November 13th, 2018.
          Your participation in this research confirms that you have read this information and wish to participate in the research study.
          </p>
          <p><span class="bold">By checking this box, I confirm that I am 18 years old, my participation is voluntary and I can stop the study at any time without justification.</span> 
          </p>
        </div>
        </div>
        <div>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <span></span>
          </label>
        </div>
      <div className="buttonContainer">
          <Button type="button" disabled={!this.state.checked} onClick={()=>this.redirectToTarget()}>Next</Button>
      </div>
      </div>
    );
  }
}
 
export default withRouter(Intro);
