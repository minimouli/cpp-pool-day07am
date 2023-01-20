/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <iostream>
#include "Borg.hpp"
#include "Federation.hpp"
#include "WarpSystem.hpp"

int main() {

    Federation::Starfleet::Ship UssKreog(289, 132, "Kreog", 6, 20);
    Federation::Ship Independent(150, 230, "Greok");
    Borg::Ship cube(20, 1);

    WarpSystem::QuantumReactor QR;
    WarpSystem::QuantumReactor QR2;
    WarpSystem::Core core(&QR);
    WarpSystem::Core core2(&QR2);

    UssKreog.setupCore(&core);
    UssKreog.checkCore();

    Independent.setupCore(&core2);
    Independent.checkCore();

    UssKreog.fire(3, &cube);
    cube.fire(&UssKreog);
    cube.fire(&Independent);

    UssKreog.checkCore();
    Independent.checkCore();

    return 0;
}
