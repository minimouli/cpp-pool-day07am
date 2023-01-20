/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 05', () => {

    test('Exam', async () => {

        const sources = await Path.fromProject().glob('*.cpp')

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex05/main.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject().toString()}`,
            `-I${Path.fromMoulinette('./res/headers').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            '[The exam is starting]',
            '3 Klingon vessels appeared out of nowhere.',
            'they are fully armed and shielded',
            'This exam is hard... you lost again.',
            '[The exam is starting]',
            '4 Klingon vessels appeared out of nowhere.',
            'they are fully armed and shielded',
            'What the... someone changed the parameters of the exam !',
            ''
        ])
    })

})
