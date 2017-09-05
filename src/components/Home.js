import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';

import { getList } from '../actions/userAction'
import { connect } from 'react-redux'

class User extends Component {
    componentWillMount() {
        this.props.getList("")
    }

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    render() {
        const {} = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            Add
                            </Avatar>
                    }
                    title="Agregar"
                    subheader="Productos"
                />
             
                    <TextField
                        id="precio"
                        label="Codigo"                        
                        
                        type="number"
                    />
                    <br />
                    <TextField
                        id="cantidad"
                        label="Nombre"
                        label="Nombre"
                        label="Nombre"
                        label="Nombre"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="cantidad"
                        label="Precio"
                        type="number"
                    />
                    <br />
                    <br />
                    <TextField
                        id="cantidad"
                        label=""
                        type="date"                        
                    />
                    <br />
                    <TextField
                        id="cantidad"
                        label="Cantidad"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />  
                    <br />
                    <label>
                        Cual es tu favorito
                        <select  onChange={this.handleChange}>
                            <option value="grapefruit">roductos Belleza</option>
                            <option value="lime">Analgesicos</option>
                            <option value="coconut">Inyectables</option>
                            <option value="mango">Antibiotico</option>
                        </select>
                        </label>
                        <br />
                    <Button fab color="primary" aria-label="add">
                        <AddIcon />
                    </Button>
                    <Button color="secondary" aria-label="add">
                        <strong> Cancelar </strong>
                    </Button>    
            </Card >
        );
    }
}

User.propTypes = {
    list: PropTypes.array
}

function mapStateToProps(state) {
    return {
        list: state.user.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getList: (q) => { dispatch(getList(q)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
