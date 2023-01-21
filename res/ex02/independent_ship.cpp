/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <iostream>
#include "Destination.hpp"
#include "Federation.hpp"
#include "WarpSystem.hpp"

int main() {

    Federation::Ship Independent(150, 230, "Greok");
    WarpSystem::QuantumReactor QR;
    WarpSystem::Core core(&QR);

    Independent.setupCore(&core);

    std::cout << "move(2, EARTH): " << (Independent.move(2, EARTH) ? "true" : "false") << std::endl;
    std::cout << "move(0, EARTH): " << (Independent.move(0, EARTH) ? "true" : "false") << std::endl;

    std::cout << "move(EARTH): " << (Independent.move(EARTH) ? "true" : "false") << std::endl;
    std::cout << "move(VULCAN): " << (Independent.move(VULCAN) ? "true" : "false") << std::endl;

    QR.setStability(false);
    std::cout << "move without stability: " << (Independent.move(EARTH) ? "true" : "false") << std::endl;
    QR.setStability(true);
    std::cout << "move with stability: " << (Independent.move(EARTH) ? "true" : "false") << std::endl;

    return 0;
}
