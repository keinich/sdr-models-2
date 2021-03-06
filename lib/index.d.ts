export declare const HelloWorld: (name: string) => string;
export declare class SubjectMetaRecord {
    /**
     * An [Universally Unique Identifier](https://de.wikipedia.org/wiki/Universally_Unique_Identifier) which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    subjectUid: string;
    /**
     * identity of the patient which is usually a pseudonym from a corr. 'IdentiyManagementSystem' (the exact semantic is defined per study) *this field has a max length of 100
     */
    subjectIdentifier: string;
    studyUid: string;
    actualSiteUid: string;
    /**
     * This is an internal managed field, which is related to the state of records dedicated to the database. It will be automatically set when a record is archived. A mapping during data import requires opt-in.
     */
    isArchived: boolean;
    /**
     * This is an internal managed field (UNIX-Timestamp), which is related to the state of records dedicated to the database. It will be automatically set to the current time when a record is created, updated, archived or unarchived, but cannot be updated from outside and must not be mapped during data imports.
     */
    modificationTimestampUtc: number;
}
