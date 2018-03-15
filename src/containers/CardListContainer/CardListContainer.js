/**
 * Created by supun on 15/03/18.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreatorFactory} from '../../actions/actionCreator'
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS} from '../../constants/constant'

import CardListView from './CardListView'
function mapStateToProps(state){
    return {
        userCardList:{
            title:"User–Record",
            users: [
                {
                    userId: "SCHMIDT",
                    lastName: "Schmidt",
                    firstName:"Dieter",
                    task: "Inspector",
                    department: "QM01",
                    role: "USER",
                    password: "1234567890"
                },
                {
                    userId: "SCHMIDT",
                    lastName: "Schmidt",
                    firstName:"Dieter",
                    task: "Inspector",
                    department: "QM01",
                    role: "USER",
                    password: "1234567890"
                },
                {
                    userId: "SCHMIDT",
                    lastName: "Schmidt",
                    firstName:"Dieter",
                    task: "Inspector",
                    department: "QM01",
                    role: "USER",
                    password: "1234567890"
                }]
        },
        codeCardList:{
            title:"Code-Record",
            codes: [
                {
                    code: "A1",
                    codeType: "U",
                    description: "Fehlende Dokumentation/Aufzeichnungen",
                    codeGroup: "NC-CC-A"
                },
                {
                    code: "A2",
                    codeType: "U",
                    description: "Falsche/fehlerh. Dokument/Aufzeichnung",
                    codeGroup: "NC-CC-A"
                },
                {
                    code: "AA",
                    codeType: "P",
                    description: "Strukturelle und mechanische Montage",
                    codeGroup: "NC-DC-A"
                }
            ]
        },
        codeGroupCardList:{
            title:"Code-Group-Record",
            codeGroups: [
                {
                    codeGroup: "NC-DC-A",
                    description: "Struktureller und mechanischer Einbau",
                    codeType: "P"
                },
                {
                    codeGroup: "NC-DC-B",
                    description: "Elektrik-Einbau",
                    codeType: "P"
                },
                {
                    codeGroup: "NC-DC-C",
                    description: "Oberfläche und Behandlung",
                    "codeType": "P"
                },
                {
                    codeGroup: "NC-DC-D",
                    description: "Beschädigung",
                    codeType: "P"
                }

            ]
        },



    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        userCardAction:{
            getAllUsers:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_USERS,ATTRS.PAYLOAD),dispatch),
            createUsers:bindActionCreators(actionCreatorFactory(KEYS.CREATE_USER,ATTRS.PAYLOAD),dispatch),
            deleteUser:bindActionCreators(actionCreatorFactory(KEYS.DELETE_USER,ATTRS.PAYLOAD),dispatch),
            updateUser:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_USER,ATTRS.PAYLOAD),dispatch),
        },
        codeCardAction:{
            getAllCodes:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_CODES,ATTRS.PAYLOAD),dispatch),
            createCode:bindActionCreators(actionCreatorFactory(KEYS.CREATE_CODE,ATTRS.PAYLOAD),dispatch),
            deleteCode:bindActionCreators(actionCreatorFactory(KEYS.DELETE_CODE,ATTRS.PAYLOAD),dispatch),
            updateCode:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_CODE,ATTRS.PAYLOAD),dispatch),
        },
        codeGroupCardAction:{
            getAllCodeGroups:bindActionCreators(actionCreatorFactory(KEYS.GET_ALL_CODE_GROUPS,ATTRS.PAYLOAD),dispatch),
            createCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.CREATE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
            deleteCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.DELETE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
            updateCodeGroup:bindActionCreators(actionCreatorFactory(KEYS.UPDATE_CODE_GROUP,ATTRS.PAYLOAD),dispatch),
        },

    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CardListView)
