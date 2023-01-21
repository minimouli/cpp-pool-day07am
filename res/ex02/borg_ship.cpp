/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <iostream>
#include "Destination.hpp"
#include "Borg.hpp"
#include "Federation.hpp"
#include "WarpSystem.hpp"

int main() {

    Borg::Ship cube;
    WarpSystem::QuantumReactor QR;
    WarpSystem::Core core(&QR);

    cube.setupCore(&core);

    std::cout << "move(10, JUPITER): " << (cube.move(10, JUPITER) ? "true" : "false") << std::endl;
    std::cout << "move(0, JUPITER): " << (cube.move(0, JUPITER) ? "true" : "false") << std::endl;

    std::cout << "move(JUPITER): " << (cube.move(JUPITER) ? "true" : "false") << std::endl;
    std::cout << "move(ROMULUS): " << (cube.move(ROMULUS) ? "true" : "false") << std::endl;

    QR.setStability(false);
    std::cout << "move without stability: " << (cube.move(VULCAN) ? "true" : "false") << std::endl;
    QR.setStability(true);
    std::cout << "move with stability: " << (cube.move(VULCAN) ? "true" : "false") << std::endl;

    return 0;
}
