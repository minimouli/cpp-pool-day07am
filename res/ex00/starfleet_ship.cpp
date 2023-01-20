/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Federation.hpp"
#include "WarpSystem.hpp"

int main() {

    Federation::Starfleet::Ship UssKreog(289, 132, "Kreog", 6);
    WarpSystem::QuantumReactor QR;
    WarpSystem::Core core(&QR);

    UssKreog.setupCore(&core);
    UssKreog.checkCore();

    QR.setStability(false);
    UssKreog.checkCore();

    return 0;
}
