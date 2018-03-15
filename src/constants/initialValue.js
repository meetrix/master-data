/**
 * Created by supun on 15/03/18.
 */
export const spinner_init ={
    value:false

}
export const code_card_init ={
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
}
export const code_group_init={
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
}
export const user_card_init={
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
}