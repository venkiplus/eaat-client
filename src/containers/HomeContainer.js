import React from 'react'
import PropTypes from 'prop-types'
import { Counter } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { Select, Layout, Row, Col, Menu  } from 'antd';
import 'styles/App.css';
import 'antd/dist/antd.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LocationActions from 'actions/locations'
const { Content, Footer, Header } = Layout;
const Option = Select.Option;

class HomeContainer extends React.Component {

  constructor(props){
    super(props)
    this.props.getLocations()
    this.state = {
      locations: null
    }
    this.handleChange.bind(this)
  }

  handleChange(value, text) {
    console.log(`selected ${value}`);
  }

  componentWillReceiveProps(nextProps){
    this.setState({locations:nextProps.locations.locations},()=>console.log(this.state.locations))
  }



  render() {
    return (
      <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
         <Layout style={{ background: 'linear-gradient(to bottom right, #e94c34 15%, #440534) no-repeat' }}>
           <Content style={{ margin: '0 16px', padding: 20 }}>
             <div style={{ padding: 24, minHeight: 360 }}>
             <Row type="flex" justify="center" align="middle" style={{ height:'400px'}}>
               <Col style={{ width:"500px"}}>
                  <div className="logo">eaat</div>
                  <div className="tag-line">Order food from restaurants near you</div>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select location"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                  {this.state.locations &&
                    this.state.locations.map((item)=><Option value={item.locationId}>{item.name}</Option>)
                  }
                  </Select>
               </Col>
             </Row>
             </div>
           </Content>
           <Footer style={{ textAlign: 'center', background: 'none', color: '#fff' }}>
             eaat.in ©2018 Made with love
           </Footer>
         </Layout>
       </Layout>
       </div>
    )
  }
}

HomeContainer.propTypes = {
  handleChange: PropTypes.func
}


const mapStateToProps = (state)=>{
    return {
      locations: state.locations
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LocationActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
