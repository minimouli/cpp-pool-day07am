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

    Federation::Starfleet::Ship UssKreog(289, 132, "Kreog", 6);
    WarpSystem::QuantumReactor QR;
    WarpSystem::Core core(&QR);

    UssKreog.setupCore(&core);

    std::cout << "move(10, VULCAN): " << (UssKreog.move(10, VULCAN) ? "true" : "false") << std::endl;
    std::cout << "move(0, VULCAN): " << (UssKreog.move(0, VULCAN) ? "true" : "false") << std::endl;

    std::cout << "move(VULCAN): " << (UssKreog.move(VULCAN) ? "true" : "false") << std::endl;
    std::cout << "move(EARTH): " << (UssKreog.move(EARTH) ? "true" : "false") << std::endl;

    QR.setStability(false);
    std::cout << "move without stability: " << (UssKreog.move(VULCAN) ? "true" : "false") << std::endl;
    QR.setStability(true);
    std::cout << "move with stability: " << (UssKreog.move(VULCAN) ? "true" : "false") << std::endl;

    return 0;
}
