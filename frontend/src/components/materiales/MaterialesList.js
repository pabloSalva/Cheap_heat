import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMateriales } from '../../actions/materiales';


class MaterialesList extends Component {
  componentDidMount() {
    this.props.getMateriales();
  }

  render() {
    return (
        
        
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.materiales.map(material => (  
          <div className='item' key={material.id}>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{material.nombre_material}</a>
              <div className='description'>{material.tipo}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  materiales: Object.values(state.materiales)
});

export default connect(
  mapStateToProps,
  { getMateriales }
)(MaterialesList);