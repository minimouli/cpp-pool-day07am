/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Exam.hpp"

int main(){

    Exam e = Exam(&Exam::cheat);
    e.kobayashiMaru = &Exam::start ;
    (e.*e.kobayashiMaru)(3);

    Exam::cheat = true;
    if (e.isCheating())
        (e.*e.kobayashiMaru)(4);

    return 0;
}
