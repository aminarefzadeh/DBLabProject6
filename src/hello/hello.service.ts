import { Injectable } from '@nestjs/common';
import { pseudoRandomBytes } from 'crypto';
import {PersonDto} from './dto/person.dto';

@Injectable()
export class HelloService {
    async welcome(person: PersonDto): Promise<string> {
        let msg: string;
        if (person.year) {
            let current_year = new Date().getFullYear();
            msg = `Welcome ${person.name} - you are ${current_year - person.year} years old!`
        }
        else {
            msg = `Welcome ${person.name} - your birthday is undefined!!`
        }
        return msg;
    }
}
