/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Borg.hpp"
#include "Federation.hpp"
#include "WarpSystem.hpp"

int main() {

    Borg::Ship cube;
    WarpSystem::QuantumReactor QR;
    WarpSystem::Core core(&QR);

    cube.checkCore();
    cube.setupCore(&core);
    cube.checkCore();
    QR.setStability(false);
    cube.checkCore();

    return 0;
}
