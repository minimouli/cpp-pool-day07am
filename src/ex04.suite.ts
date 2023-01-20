/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 04', () => {

    let sources: Path[]

    beforeAll(async () => {
        sources = await Path.fromProject().glob('*.cpp')
    })

    test('Commanders', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex04/main.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject().toString()}`,
            `-I${Path.fromMoulinette('./res/headers').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Admiral The Boss ready for action.',
            'The ship USS Kreog has been finished.',
            'It is 289 m in length and 132 m in width.',
            'It can go to Warp 6!',
            'Weapons are set: 20 torpedoes ready.',
            'We are the Borgs. Lower your shields and surrender yourselves unconditionally.',
            'Your biological characteristics and technologies will be assimilated.',
            'Resistance is futile.',
            'USS Kreog: The core is set.',
            'James T. Kirk: I\'m glad to be the captain of the USS Kreog.',
            'On order from Admiral The Boss:',
            'Kreog: Firing on target. 19 torpedoes remaining.',
            'On order from Admiral The Boss:',
            'Kreog: Firing on target. 18 torpedoes remaining.',
            'On order from Admiral The Boss:',
            'Kreog: Firing on target. 17 torpedoes remaining.',
            'Firing on target with 20GW frequency.',
            'Firing on target with 18GW frequency.',
            ''
        ])
    })

})
