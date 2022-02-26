"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name = string
 * duration = number
 * instructor = string
 */
class CreateCourseService {
    execute(name, duration, instructor) {
        console.log(name, duration, instructor);
    }
}
exports.default = new CreateCourseService();
