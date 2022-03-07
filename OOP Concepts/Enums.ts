// Enums are special type in TS which allows to store a set of constants or keywords and associates them with a numeric value.
enum ResourceType {BOOK, AUTHOR, FILM}

interface Resource <T>{
    resourceType: ResourceType;
    data: T;
}

const R1: Resource<object> = {
    resourceType: ResourceType.BOOK,
    data: {title: 'Do Epic Shit'}
}