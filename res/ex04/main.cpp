/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <iostream>
#include "Admiral.hpp"
#include "Borg.hpp"
#include "BorgQueen.hpp"
#include "Federation.hpp"

int main() {

    Federation::Starfleet::Admiral admiral("The Boss");
    Borg::BorgQueen queen;

    Federation::Starfleet::Ship UssKreog(289, 132, "Kreog", 6, 20);
    Federation::Starfleet::Captain James("James T. Kirk");
    Borg::Ship cube;

    WarpSystem::QuantumReactor QR;
    WarpSystem::Core core(&QR);

    UssKreog.setupCore(&core);
    UssKreog.promote(&James);

    admiral.fire(&UssKreog, &cube);
    admiral.fire(&UssKreog, &cube);
    admiral.fire(&UssKreog, &cube);

    queen.fire(&cube, &UssKreog);
    cube.setWeaponFrequency(18);
    queen.fire(&cube, &UssKreog);

    return 0;
}
